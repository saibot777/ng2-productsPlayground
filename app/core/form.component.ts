/**
 * Created by stefan.trajkovic on 22.2.2017..
 */
import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms"; 
import { Product } from "../model/product.model"; 
import { Model } from "../model/repository.model" 
import { MODES, SharedState, SHARED_STATE  } from "./sharedState.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

@Component({   
    selector: "paForm",    
    moduleId: module.id,    
    templateUrl: "form.component.html",   
    styleUrls: ["form.component.css"] 
})

export class FormComponent {
    product: Product = new Product();
    lastId: number;

    constructor(private model:Model,
        @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {

        stateEvents
            // .map(state => new SharedState(state.mode, state.id == 5 ? 1 : state.id))
            // .filter(state => state.id != 3)
            .subscribe((update) => {
            this.product = new Product();
            if (update.id != undefined) {
                Object.assign(this.product, this.model.getProduct(update.id));
            }
            this.editing = update.mode == MODES.EDIT;
        });
    }

    editing: boolean = false;


    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        }
    }

    resetForm() {
        this.product = new Product();
    }


}