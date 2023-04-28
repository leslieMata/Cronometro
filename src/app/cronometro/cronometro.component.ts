import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  public  segundo : number=0;
  @Input() public inicio: number= 0;
  @Output() public multiplo10 = new EventEmitter();

  ngOnInit(): void {
    this.segundo = this.inicio;
    setInterval(this.actualizarSegundo.bind(this), 1000);
  }
  private actualizarSegundo() : void {
    this.segundo++;
    if (this.segundo % 10===0) {
      this.emitirMutiplo10();
    }
  }
  private emitirMutiplo10() : void {
    this.multiplo10.emit(this.segundo);
  }
}
