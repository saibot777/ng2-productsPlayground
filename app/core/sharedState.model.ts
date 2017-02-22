/**
 * Created by stefan.trajkovic on 22.2.2017..
 */
export enum MODES {    
    CREATE, EDIT 
}
export class SharedState {   
    mode: MODES = MODES.EDIT;    
    id: number; 
}