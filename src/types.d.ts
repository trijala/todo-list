type Addprop =(newtodo: string) => void;

type todo= {
    text: string;
    complete: boolean;
}

type togglecomplete = (selectedtodo : todo) => void;