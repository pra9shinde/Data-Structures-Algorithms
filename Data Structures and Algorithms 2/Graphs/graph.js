let util = require('util');
//Implement undirected and unweighted graph
//Nodes or vertex are stored as a key in an object and its connections are pushed as values in their respective objects. Key Value Pair

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        //Find the first vertex in the list and push vertex2 in its data
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            //Find the second vertex in the list and push vertex1 in its data
            this.adjacencyList[vertex2].push(vertex1);
        }
        else{
            return undefined;
        } 
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]) delete this.adjacencyList[vertex];
    }

    removeEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            //Remove linkage of v2 from v1
            for(let i = 0; i < this.adjacencyList[v1].length; i++){
                if(this.adjacencyList[v1][i] === v2) this.adjacencyList[v1].splice(i, 1);
            }
            //Remove Linkage of v1 from v2
            for(let i = 0; i < this.adjacencyList[v2].length; i++){
                if(this.adjacencyList[v2][i] === v1) this.adjacencyList[v2].splice(i, 1);
            }
        }
    }

    DFS(v){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;//this.adjacencyList will change in below function hence store it in a variable(will not be accessible in below function)

        function DFSTraverse(vertex){
            //If the vertex not present return null
            if(!adjacencyList[vertex]) return null;
            //Add the vertex to result list
            result.push(vertex);
            //mark vertex as visited
            visited[vertex] = true;     
            //Loop each neighbor of the vertex
            for(let v1 of adjacencyList[vertex]){
                //If neighbor is not already visited
                if(visited[v1] !== true){
                    //Recurse and traverse its neighbors and so on
                    DFSTraverse(v1);
                }
            }
            // console.log(visited);
            // console.log(result);
        }
        DFSTraverse(v);
        return result;
    }

    BFS(start){
        let queue = [start];//Use queue for storing and removing verices,add start to queue
        let result = [];//Final result
        let visited = {};//Visited tracking object
        let currentVertex;
        visited[start] = true;//since we start with passed vertex mark it as visited

        while(queue.length){
            //remove first item from queue
            currentVertex = queue.unshift();
            //push the current into the result array
            result.push(currentVertex);

            //Loop through all the connection vertexes of current vertex
            this.adjacencyList[currentVertex].forEach(neighbor => {
                //If current neighbor is not visited already
                if(!visited[neighbor]){
                    //mark is visited and push it in to the queue
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(util.inspect(g, false, null, true));

//g.removeEdge("Dallas","Aspen");
//console.log(util.inspect(g, false, null, true));

//g.removeVertex("Aspen");
//console.log(util.inspect(g, false, null, true));

console.log(g.DFS("A"));

