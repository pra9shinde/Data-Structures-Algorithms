//Dijkshtra uses Priority Queue, in this example we will use simple priority queue for less complications but ideally priority queue with binary heap min implementation
//DIjkshtra requires weighted graph

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

//We require 3 data structures for Dijkstras- First is an object which stores shortest distance from A to all Nodes, Second Nodes which will be stored in distances using priority queue, Third is previous node object for keeping track of previous node and traversing.
//Priority queue is used for distance 
class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node : vertex2,weight : weight});
        this.adjacencyList[vertex2].push({node : vertex1, weight : weight});
    }

    Dijkshtra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []; //to return at the end

        //Build up Distances
            //Loop through adjacencylist add each vertex to distances
            //Add in distances and Keep everyones values as infinity except start node because we dont know the distance between them
            //Also add the vertex to priority queue to always get smallest from the distance object
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);//since we know the start will be our first priority
            }
            else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }

        //Loop as long as there are any values in the queue to visit
        while(nodes.values.length){
            //Dequeue the smallest value from priority queue
            smallest = nodes.dequeue().val;

            if(smallest === finish){
                //we are done traversing, return the path
                //console.log(distances);
                //console.log(previous);

                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            //Else get all neighbors of the popped node(smallest) if popped.
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //Find Neigboring Nodes
                    let nextNode = this.adjacencyList[smallest][neighbor];//Adjacency list is array of objects neighbor just gives index of the neighbors not the value of that index object

                    //Calculate the distance to its neighbor nodes which will be distance of the popped node(smallest) present in the distance object(at beginiing it will be Infinity but later its updated) plus weight of its neighbor node
                    let candidate = distances[smallest] + nextNode.weight;

                    //compare the calculated value(candidate) with already present value of the neighbor node(nextNode). If calculated is less then replace the existing value in the distance
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        //update previous
                        previous[nextNeighbor] = smallest;//How we reached this neighbor
                        //Since the distance is update add it in priority queue
                        nodes.enqueue(nextNeighbor,candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}


let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B",4);
g.addEdge("A","C",2);
g.addEdge("B","E",3);
g.addEdge("C","D",2);
g.addEdge("C","F",4);
g.addEdge("D","E",3);
g.addEdge("D","F",1);
g.addEdge("E","F",1);


console.log(g.Dijkshtra("A","E"));