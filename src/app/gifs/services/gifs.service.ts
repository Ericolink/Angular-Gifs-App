import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagHistory];
  }


  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if ( this._tagHistory.includes( tag ) ) {
      this._tagHistory = this.tagsHistory.filter( (oldTag) => oldTag !== tag )
    }
    this._tagHistory.unshift( tag );
    this._tagHistory = this.tagsHistory.splice(0,10)
  }

  searchTag( tag: string ): void{
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);


    console.log(this.tagsHistory)
  }
}
