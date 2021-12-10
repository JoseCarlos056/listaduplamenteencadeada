import { Client } from "../models/Client";

class ClientNode {
    value: Client;
    next: ClientNode | null;
    previous: ClientNode | null;
    constructor(value: Client) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class ClientDoublyLinkedList {
    head: ClientNode | null;
    length: number;
    tail: ClientNode | null;
   constructor(value: Client) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.length = 1;
        this.tail = this.head;
    }
    show(){
        let array = [];
        let currentList = this.head;
        while (currentList !== null) {
            array.push(currentList.value);
            currentList = currentList.next;
        }
        console.log(array.join(' <--> '));
        return this;
    }
    add(value: Client) {
        let newNode = new ClientNode(value);
        if(this.tail){
            this.tail.next = newNode;
        }
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        this.show();
    }
    remove (index: number) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Index inválido. Tamanho da lista atual ${this.length}.`);
            return this;
        }
        if (index === 0) {
            if(this.head)
                this.head = this.head.next;
            if(this.head)
                this.head.previous = null;
            
            this.length--;
            this.show();
            return this;
        }
  
        if (index === this.length - 1) {
            if(this.tail)
            this.tail = this.tail.previous;
            if(this.tail)
            this.tail.next = null;
  
            this.length--;
            this.show();
            return this;
        }
  
        let previousNode = this.head;
     
        for (let k = 0; k < index - 1; k++) {
            if(previousNode)
            previousNode = previousNode.next;
        }
        if(previousNode?.next){
            let deleteNode = previousNode.next;
            let nextNode = deleteNode.next;
            previousNode.next = nextNode;
            if(nextNode)
            nextNode.previous = previousNode;
  
        }
        this.length--;
        this.show();
        return this;
    }
    edit (index: number, client: Client) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Index inválido. Tamanho da lista atual ${this.length}.`);
            return this;
        }
        if (index === 0) {
            if(this.head)
                this.head = this.head.next;
            if(this.head)
                this.head.previous = null;
            
            this.length--;
            this.show();
            return this;
        }
  
        if (index === this.length - 1) {
            if(this.tail)
            this.tail = this.tail.previous;
            if(this.tail)
            this.tail.next = null;
  
            this.length--;
            this.show();
            return this;
        }
  
        let previousNode = this.head;
     
        for (let k = 0; k < index - 1; k++) {
            if(previousNode)
            previousNode = previousNode.next;
        }
        if(previousNode?.next){
            previousNode.next = new ClientNode(client)
        }
        this.length--;
        this.show();
        return this;
    }
}