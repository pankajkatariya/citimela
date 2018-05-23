import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-home-events',
    templateUrl: './home-events.component.html',
    styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {
    @Input() events: any = [
        {
            "Type": 1, //Type:01=>Image
            "AssociatedCatalog": null,
            "ParentPostId": 0,
            "CreatedBy": "Goverthanan",
            "CreatedOn": "01-nov-2017",
            "Order": 1,
            "Src": "http://static.freemake.com/blog/wp-content/uploads/2017/11/24130056/watching-movies.jpg",
            "CommentPosts": [
                {
                    "Type": 0,
                    "AssociatedCatalog": null,
                    "ParentPostId": 1,
                    "CreatedBy": "Palani",
                    "CreatedOn": "01-nov-2017",
                    "Order": 1,
                    "CommentPosts": [
                        {
                            "Type": 0,
                            "AssociatedCatalog": null,
                            "ParentPostId": 11001,
                            "CreatedBy": "Goverthanan",
                            "CreatedOn": "01-nov-2017",
                            "Order": 1,
                            "CommentPosts": [
                            ],
                            "LikedBy": null,
                            "Description": "Sathiyam theatre",
                            "UniqueId": "00000000-0000-0000-0000-000000000000",
                            "State": 0,
                            "Id": 11005,
                            "profile_pic":"assets/images/pro1.jpg"
                        }
                    ],
                    "LikedBy": null,
                    "Description": "Where?",
                    "UniqueId": "00000000-0000-0000-0000-000000000000",
                    "State": 0,
                    "Id": 11001,
                    "profile_pic":"assets/images/pro2.jpg"
                },
                {
                    "Type": 0,
                    "AssociatedCatalog": null,
                    "ParentPostId": 1,
                    "CreatedBy": "AK",
                    "CreatedOn": "01-nov-2017",
                    "Order": 1,
                    "CommentPosts": [
                    ],
                    "LikedBy": null,
                    "Description": "I will also join next time?",
                    "UniqueId": "00000000-0000-0000-0000-000000000000",
                    "State": 0,
                    "Id": 11007,
                    "profile_pic":"assets/images/pro3.jpg"
                }
            ],
            "LikedBy": null,
            "Description": "Watching Movies",
            "UniqueId": "00000000-0000-0000-0000-000000000000",
            "State": 0,
            "Id": 1,
            "profile_pic":"assets/images/postuser.jpg"
        },
        {
            "Type": 2,  //2 video
            "AssociatedCatalog": null,
            "ParentPostId": 0,
            "CreatedBy": "Sam",
            "CreatedOn": "10-nov-2017",
            "Order": 1,
            "Src": "https://www.youtube.com/embed/3ev7GXzFTPg",
            "CommentPosts": [
            ],
            "LikedBy": null,
            "Description": "This is Why You Don't SUCCEED",
            "UniqueId": "00000000-0000-0000-0000-000000000000",
            "State": 0,
            "Id": 5
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
