/* LIFO = Last In First Out */
class Node
{
	constructor(value)
	{
		this.next=undefined;
		this.value=value;
	}
};

class Stack
{
	constructor()
    {
        this.top=undefined;
    }

    Push(value)
    {
        if(!this.top)
        {
            this.top=new Node(value);
            return;
        }
        let temp=this.top;
        this.top=new Node(value);
        this.top.next=temp;
    }

    Peek()
    {
        if(!this.top) return;
        return this.top.value;
    }

    Pop()
    {
        if(!this.top) return;
        let top=this.top;
        this.top=this.top.next;
        return top.value;
    }

    IsEmpty()
    {
        return this.top==undefined;
    }

    Log()
    {
        let str="";
        for(let node=this.top;node;node=node.next)
        {
            str+=node.value+"->";
        }
        console.log(str);
    }
};

let stack=new Stack();
console.log(stack.IsEmpty()); /* Expected: False */
stack.Push(10);
stack.Push(20);
stack.Push(30);
stack.Push(40);
stack.Log(); /* Expected: 40->30->20->10-> */
console.log(stack.Pop()); /* Expected: 40 */
console.log(stack.Peek()); /* Expected: 30 */
stack.Pop(); /* 30 */
stack.Pop(); /* 20 */
stack.Pop(); /* 10 */
console.log(stack.IsEmpty()); /* Expected: true */