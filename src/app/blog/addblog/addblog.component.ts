import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from 'src/app/blog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  constructor(private _ngZon: NgZone,private _Router: Router, private _blog: BlogService) { }
  ngOnInit() {
  }



  onSubmit(f) {
    // console.log(f);
    let fd=new FormData();
    fd.append('blog_id ',f.value.blog_id);
    fd.append('blog_head',f.value.blog_head);
    fd.append('blog_photo',this.selectedfile,this.selectedfile.name);

    fd.append('blog_quote',f.value.blog_quote);
    fd.append('blog_paragraph',f.value.blog_paragraph);
    fd.append('blog_paragraph2',f.value.blog_paragraph2);



    this._blog.addblog(fd).subscribe(
      (data: blog[]) => {
        console.log(data);
        this._Router.navigate(['/nav/blog']);
      }
    );
  }
  onCancel() {
    this._Router.navigate(['/nav/blog']);
  }


  selectedfile: File = null;

  onChange(value) {
    this.selectedfile = <File>value.target.files[0];
  }

}
