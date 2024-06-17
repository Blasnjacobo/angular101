import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nostrum cupiditate consectetur debitis placeat accusantium. In accusamus deserunt sint dolores consequuntur fuga modi quibusdam quasi recusandae, saepe sapiente facilis laborum.</div>
    <img src="https://cdn.vox-cdn.com/thumbor/6WUQ-FozHdnzwKN7t31bJWPbdxI=/0x0:900x500/1400x1050/filters:focal(450x250:451x251)/cdn.vox-cdn.com/uploads/chorus_asset/file/6438793/this-is-fine.jpg" alt="This is fine">
  `,
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class CommentsComponent {

}