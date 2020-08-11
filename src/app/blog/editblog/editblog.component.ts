import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { blog } from 'src/app/blog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editBlog',
  templateUrl: './editBlog.component.html',
  styleUrls: ['./editBlog.component.css']
})
export class EditBlogComponent implements OnInit {

  constructor(private _router: Router,
    private _act: ActivatedRoute,
    private _blog: BlogService) { }
  blog_id: number;

  img1: string = '';


  EditBlogForm: FormGroup;
  blogurl: string = "http://localhost:3000/";

  ngOnInit() {

    this.blog_id = this._act.snapshot.params['blog_id']
    this.EditBlogForm = new FormGroup({
      blog_id: new FormControl(null),
      blog_head: new FormControl(null, [Validators.required]),

      blog_photo: new FormControl(null),
      blog_quote: new FormControl(null),
      blog_paragraph: new FormControl(null),
      blog_paragraph2: new FormControl(null),
    });
    this._blog.getblogById(this.blog_id).subscribe(
      (data: blog) => {
        console.log(data)
        this.editBlogFormDataBind(data[0]);
      }
    );

  }

  editBlogFormDataBind(item: blog) {
    this.img1 = item.blog_photo;
    this.blogurl = environment.url + item.blog_photo;
    this.EditBlogForm.patchValue({
      blog_id: item.blog_id,
      blog_head: item.blog_head,
      blog_photo: item.blog_photo,
      blog_quote: item.blog_quote,
      blog_paragraph: item.blog_paragraph,
      blog_paragraph2: item.blog_paragraph2
    });
  }

  onSubmit() {
    console.log(this.EditBlogForm.value);
    let fd = new FormData();
    fd.append('blog_head', this.EditBlogForm.value.blog_head);
    if (this.selectedfile != null) {
      fd.append('pic', this.selectedfile, this.selectedfile.name);
    }
    else {
      fd.append('pic', this.EditBlogForm.get('blog_photo').value);
    }
    fd.append('blog_quote', this.EditBlogForm.value.blog_quote);
    fd.append('blog_paragraph', this.EditBlogForm.value.blog_paragraph);
    fd.append('blog_paragraph2', this.EditBlogForm.value.blog_paragraph2);

    this._blog.updateblogData(this.blog_id, fd).subscribe(
      (data: blog) => {
        // alert("SUCCESSSS");
        console.log(data);

        this._router.navigate(['/nav/blog']);

      }
    );

  }
  selectedfile: File = null;

  onChange(value) {
    this.selectedfile = <File>value.target.files[0];

    // this.prod_img = this.selectedfile.name;
    // this.imageURL = this.URl + '/' + this.prod_img;
    // console.log(this.imageURL);
  }

  onCancel() {
    this._router.navigate(["/nav/blog"]);
  }

}
