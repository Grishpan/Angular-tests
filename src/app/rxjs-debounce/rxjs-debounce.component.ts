import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {combineLatest, forkJoin, fromEvent, Observable, Subscription, timer} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-debounce',
  templateUrl: './rxjs-debounce.component.html',
  styleUrls: ['./rxjs-debounce.component.scss']
})
export class RxjsDebounceComponent implements AfterViewInit, OnDestroy {

  @ViewChild('buttonElement', {static: false})
  button: ElementRef;
  subscription: Subscription;
  constructor() { }

  ngAfterViewInit() {
    console.log('button ', this.button);
    const buttonClick$ = fromEvent(this.button.nativeElement, 'click');
    const timer$ = timer(10000, 4000);

    this.subscription.add(timer$.subscribe(time => console.log('time ', time)));
    // buttonClick$.subscribe(e => { console.log('clicked ', e); });

    this.subscription.add(buttonClick$.pipe(debounceTime(1000)).subscribe(e => { console.log('subscription1 ', e); }));

    combineLatest(buttonClick$, timer$).subscribe( o => console.log('ALL ', o));
   // buttonClick$.subscribe(e => { console.log('subscription2 ', e); });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
