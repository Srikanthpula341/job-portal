import { Component, OnInit } from '@angular/core';
import { JoblistService } from 'src/app/service/joblist.service';

export interface Job {
  id: string;
  title: string;
  companyName: string;
  location: string;
  tag: string;
  createdAt: string;
}
@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {
  jobList!: Job[] ;

  constructor(private jobService :JoblistService) { }

  ngOnInit(): void {
    // this.jobService.getJobList().subscribe((data:any)=>{
    //   this.jobList=data;
    //   console.log(this.jobList)
    // },(error)=>{
    //   console.log(error)
    // })
  }

}
