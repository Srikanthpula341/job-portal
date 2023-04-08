import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoblistService {
  private localUrl ="http://localhost:8082/api/job.com/v1";
  private deployUrl ="https://job-portal-com.appspot.com/job.com/v1";

  constructor(private http: HttpClient) { }

  getJobList(){
    return this.http.get(this.localUrl+"/job-list");
    //return this.http.get(this.deployUrl+"/jobs");
  }
}
