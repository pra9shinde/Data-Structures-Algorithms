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


//For traversal we will create a queue
//start with first node and once it is checked , we push it into the queue
//then find the relations of that node and do the same
function breadthFirst(){
    let qq = ["Washington"];
    let visited = {}

    while(qq.length > 0){
        let node = qq.shift();
        console.log(node);

        visited[node] = true;
        console.log("Visited Object",visited);

        for(let neighbor of gg.getNeigbours(node)){
            if(!visited[neighbor]){
                qq.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}

function breadthFirst(){
    let qq = ["Washington"];
    let visited = {}

    while(qq.length > 0){
        let node = qq.pop();
        console.log(node);

        visited[node] = true;
        console.log("Visited Object",visited);

        for(let neighbor of gg.getNeigbours(node)){
            if(!visited[neighbor]){
                qq.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}