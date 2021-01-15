class Graph{
    constructor(isDirected){
        // isDirected: indicate if the graph is directed,defaultly is not direct 
        this.isDirected = isDirected
        // save vertexes
        this.vertices = []
        // save linked table
        this.adjList = new Dictionary()
    }
    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }
    addEdge(v, w){
        // init the vertex in the vertices
        // init dictionary
        if(!this.adjList.get(v)){
            this.addVertex(v)
        }
        if(!this.adjList.get(w)){
            this.addVertex(w)
        }
        this.adjList.get(v).push(w)
        // if not directed, two vertex is as 
        if(!this.isDirected){
            this.adjList.get(w).push(v)
        }
    }
    getVertices(){
        return this.vertices
    }
    getAdjList(){
        return this.adjList
    }
    toString(){
        let s = ''
        for(let i=0;i<this.vertices.length;i++){
            let vertex = this.vertices[i]
            s += `${vertex} => `
            let neg = this.adjList.get(vertex)
            for(let j=0;j<neg.length;j++){
                s += `${neg[j]} `
            }
            s += '\n'
        }
        return s
    }
}


const graph = new Graph(); 
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12} 
for (let i = 0; i < myVertices.length; i++) { // {13} 
 graph.addVertex(myVertices[i]); 
} 
graph.addEdge('A', 'B'); 
// {14} 218 第 12 章 图
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D'); 
graph.addEdge('C', 'D'); 
graph.addEdge('C', 'G'); 
graph.addEdge('D', 'G'); 
graph.addEdge('D', 'H'); 
graph.addEdge('B', 'E'); 
graph.addEdge('B', 'F'); 
graph.addEdge('E', 'I');

console.log('graph', JSON.parse(JSON.stringify(graph)))
console.log('graph tostring', graph.toString())
// dist = [INF,INF,INF,INF,INF,INF,INF,]
// visited = [false,false,false,false,false,false,]
