import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemsComponent } from './views/list-items/list-items.component';
import { ReceiptComponent } from './views/receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
