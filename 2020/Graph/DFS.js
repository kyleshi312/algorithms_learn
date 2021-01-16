console.log('graph', graph)
console.log('graph', graph.getVertices())

// 演示DFS基本工作原理
// const DFS = (graph, callback) => {
//     const vertices = graph.getVertices()
//     const adjList = graph.getAdjList()
//     const color = initializeColor(vertices)
//     for(let n of vertices){
//         if(color[n] === Colors.WHITE){
//             depthFirstSearch(n, adjList, color, callback)
//         }
//     }
// }

// const depthFirstSearch = (u, adjList, color, callback) => {
//     color[u] = Colors.GREY
//     if(callback){
//         callback(u)
//     }
//     let neighbours = adjList.get(u)
//     for(let n of neighbours){
//         if(color[n] === Colors.WHITE){
//             depthFirstSearch(n, adjList, color, callback)
//         }
//     }
//     color[u] = Colors.BLACK
// }

// DFS(graph, printVertex)

// 演示DFS的一个工作方式，记录节点的发现时间
const DFS = (graph) => {
    const vertices = graph.getVertices()
    console.log('vertices ------', vertices)
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const d = {}
    const f = {}
    const p = {}
    const time = { count : 0};
    for(let n of vertices){
        d[n] = 0
        f[n] = 0
        p[n] = null
    }
    for(let n of vertices){
        if(color[n] === Colors.WHITE){
            depthFirstSearch(n, d, f, p, color, time, adjList)
        }
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    }
}

const depthFirstSearch = (vertex, d, f, p, color, time, adjList) => {
    d[vertex] = ++time.count
    color[vertex] = Colors.GREY
    const neighbours = adjList.get(vertex)
    for(let n of neighbours){
        if(color[n] === Colors.WHITE){
            depthFirstSearch(n, d, f, p, color, time, adjList)
            p[n] = vertex
        }
    }
    f[vertex] = ++time.count
    color[vertex] = Colors.BLACK
}

console.log('DFS', DFS(graph))

let graphDAG = new Graph(true); // 有向图
const myVerticesG = ['A', 'B', 'C', 'D', 'E', 'F']; 
for (i = 0; i < myVerticesG.length; i++) { 
    graphDAG.addVertex(myVerticesG[i]); 
} 
console.log('graphDAG', JSON.stringify(graphDAG))
graphDAG.addEdge('A', 'C'); 
graphDAG.addEdge('A', 'D'); 
graphDAG.addEdge('B', 'D'); 
graphDAG.addEdge('B', 'E'); 
graphDAG.addEdge('C', 'F'); 
graphDAG.addEdge('F', 'E'); 
const result = DFS(graphDAG);
console.log('graphDAG', result, graphDAG)

const fTime = result.finished
s = ''
for(let k of myVerticesG){
    let max = 0
    let maxName = null
    for(let n of myVerticesG){
        if(fTime[n] > max){
            max = fTime[n]
            maxName = n
        }
    }
    s += ' - ' + maxName
    Reflect.deleteProperty(fTime, maxName)
}

console.log('s', s)

var graphDijkstra = [
    [0, 2, 4, 0, 0, 0], 
    [0, 0, 2, 4, 2, 0], 
    [0, 0, 0, 0, 3, 0], 
    [0, 0, 0, 0, 0, 2], 
    [0, 0, 0, 3, 0, 2], 
    [0, 0, 0, 0, 0, 0]
];
// 贪心算法
const INF = Number.MAX_SAFE_INTEGER
const dijkstra = (graph, src) => {
    const dist = []
    const visited = [];
    const { length } = graph;
    for(let i=0; i< length; i++){
        dist[i] = INF
        visited[i] = false
    }
    dist[src] = 0
    for(let i=0; i<length - 1; i++){
        const u = minDistance(dist, visited) // 4
        visited[u] = true // 5 
        for(let v=0; v<length; v++){
            if(!visited[v] 
                && graph[u][v] !== 0 
                && dist[u] !== INF 
                && dist[u] + graph[u][v] < dist[v]){ // 6
                     dist[v] = dist[u] + graph[u][v] // 7
            }
        }
    }
    return dist // 8
}

const minDistance = (dist, visited) => {
    let min = INF,
        minIndex = -1;
    for(let i=0; i<dist.length; i++){
        if(visited[i] === false && dist[i] < min){
            min = dist[i]
            minIndex = i
        }
    }
    return minIndex
}

console.log('dijkstra', dijkstra(graphDijkstra, 0))

// Floyd-Warshall 动态规划
// var graphDijkstra = [
//     [0, 2, 4, 0, 0, 0], 
//     [0, 0, 2, 4, 2, 0], 
//     [0, 0, 0, 0, 3, 0], 
//     [0, 0, 0, 0, 0, 2], 
//     [0, 0, 0, 3, 0, 2], 
//     [0, 0, 0, 0, 0, 0]
// ];

const floydWarshall = graph => { 
    const dist = []; 
    const { length } = graph; 
    for (let i = 0; i < length; i++) { // {1} 
        dist[i] = []; 
        for (let j = 0; j < length; j++) { 
            if (i === j) { 
                dist[i][j] = 0; // {2} 
            } else if (!isFinite(graph[i][j])) { 
                dist[i][j] = Infinity; // {3} 
            } else { 
                dist[i][j] = graph[i][j]; // {4} 
            } 
        } 
    } 
    for (let k = 0; k < length; k++) { // {5} 
        for (let i = 0; i < length; i++) { 
            for (let j = 0; j < length; j++) { 
                if (dist[i][k] + dist[k][j] < dist[i][j]) { // {6} 
                    dist[i][j] = dist[i][k] + dist[k][j]; // {7} 
                } 
            } 
        } 
        return dist; 
    };