class Node
{
	constructor(value)
	{
		this.next=undefined;
		this.value=value;
	}
};

class List
{
	constructor()
	{
		this.head=undefined;
	}
	
	Iterate(fn)
	{
		for(let node=this.head;node;node=node.next){fn(node.value);}
	}

	/* Insert a node with the given value to the front of the list */
	PushFront(value)
	{
        let temp = this.head; //stores the head so we reassign it later
        this.head = new Node(value);
        this.head.next = temp;
    }

	/* Remove and return the first node in the list, */
	/* but also set the head to be the next node */
	PopFront()
	{
        let temp = this.head;
        this.head = this.head.next;
        return temp.value;
    }

	/* Calculate and return the average of all the node values in the list. */
	Average()
	{
        let node = this.head;
        let avg = 0;
        let i = 0;  //counter
        while(node){       //if there's nodes in front, keep looping
            avg += node.value;
            node = node.next;
            i++
        }
        avg /= i;
        return avg;
    }
};

let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=456;
let test_data5=567;
let test_data6=678;

/* Create our list */
let list=new List();

/* Inserts a few nodes at the beginning of the list: */
list.PushFront(test_data1);
list.PushFront(test_data2);
list.PushFront(test_data3);

/* Removes and returns the head of list, but updates the list's head */
let old_head=list.PopFront();

/* Inserts a few more nodes at the beginning of the list */
list.PushFront(test_data4);
list.PushFront(test_data5);
list.PushFront(test_data6);

/* Iterates our list, so we can see our node values */
list.Iterate(value=>console.log(value));

/* Expected Output: */
/*
	678
	567
	456
	234
	123
*/

console.log(list.Average()); /* Expected: 411.6 */