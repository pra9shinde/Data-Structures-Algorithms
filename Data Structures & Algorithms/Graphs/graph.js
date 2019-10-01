class Graph{
    constructor(){
        this.edges = [];
    }

    //Create an empty array of the node
    addNode(node){
        if(!this.edges[node]){
            this.edges[node] = [];
        }
    }

    //Once the Node is created Push the Related Data inthe the array of that node
    addEdge(start,end){
        this.edges[start].push(end);
    }

    //If Both nodes are connected to each other bidirectionally
    addBiDirectionalEdge(n1,n2){
        this.addEdge(n1,n2);
        this.addEdge(n2,n1);
    }

    //Return the result array of the node
    getNeigbours(start){
        return this.edges[start];
    }
}

const gg = new Graph(); 
gg.addNode("Washington");
gg.addNode("Oregon");
gg.addNode("Idaho");
gg.addNode("Nevada");
gg.addNode("California");


gg.addEdge("Washington","Oregon");
gg.addEdge("Washington","Idaho");
gg.addEdge("Oregon","Idaho");
gg.addEdge("Oregon","California");
gg.addEdge("Oregon","Nevada");
gg.addEdge("California","Nevada");

console.log(gg.getNeigbours("Oregon"));