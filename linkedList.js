//node is an object that is aware of its contetent and the next node
// lineked list is a collection nodes and holds info to the next element on the in the collections
//design patern:composer

class Node{
    next;
    data;
    constructor(data){
        this.data=data;
    }
}

class LinkedList{
    head
    constructor(){
        for (const data of arguments) {
           this.append(data);
        }
    }
    append(data){
        if(this.head==null){
            this.head=new Node(data);
            return;
        }

        let current=this.head;
        while (current.next!=null) {
            current=current.next;
        }
        current.next=new Node(data)
    }
    prepend(data){
        let newHead=new Node(data)
        newHead.next=this.head;
        this.head=newHead
    }
    get(data){
        let current=this.head;
        while (current!=null) {
            if(current.data==data){
                return current;
            }
            current=current.next;
        }
    }
    deleteByValue(data){
        //action:delete and return the deleted item
            if(this.head==null){
                return;
            }
            if(this.head.data==data){
                this.head=this.head.next;
                return;
            }
        let current=this.head;

            while (current.next!=null) {
                if(current.next.data==data){
                    current.next=current.next.next;
                    return;                
                }
                current=current.next;
            } 
    }
}

let list=new LinkedList("item","item2","item3","item4");
let d=list.get("item")
console.log(d.data);
