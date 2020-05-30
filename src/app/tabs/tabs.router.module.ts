import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'feed', loadChildren: "../feed/feed.module#FeedPageModule" },
      {path: 'uploader',loadChildren: "../uploader/uploader.module#UploaderPageModule",},
      {path: 'profile',loadChildren: "../profile/profile.module#ProfilePageModule",},
      {path: 'post/:id', loadChildren: '../post/post.module#PostPageModule' },

      // { path: 'add-note',loadChildren: ('../add-note/add-note.module#AddNotePageModule')},
      // { path: 'view-note/:id',loadChildren: ('../view-note/view-note.module#ViewNotePageModule') },
      // { path: 'update-note/:id', loadChildren: ('../update-note/update-note.module#UpdateNotePageModule') },

    //   { path: 'post/:id', loadChildren: "../post/post.module#PostPageModule" },
    //   {
    //     path: "edit-profile",
    //     loadChildren:
    //       "../edit-profile/edit-profile.module#EditProfilePageModule",
    //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
