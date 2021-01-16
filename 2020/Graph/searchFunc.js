// 颜色对象
const Colors = { 
    WHITE: 0, 
    GREY: 1, 
    BLACK: 2 
   };

// 颜色标记方法
const initializeColor = vertices => { 
    const color = {}; 
    for (let i = 0; i < vertices.length; i++) { 
    color[vertices[i]] = Colors.WHITE; 
    } 
    return color; 
};

// 广度优先搜索
// 1.创建一个队列Q
// 2.标注v为被发现的，加入队列！Q
// 3.如果Q非空，则运行以下步骤：
    // a 将u出队列
    // b 标记为已访问（灰色）
    // c 将所有u的未访问邻点都放入Q
    // d 标注u为已被探索的（黑色）
const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const queue = new Queue()
    queue.enqueue(startVertex)
    while(queue.size()){
        const u = queue.dequeue()
        // console.log('u', u)
        // console.log('adjList', adjList)
        const vers = adjList.get(u)
        color[u] = Colors.GREY
        for(let i=0; i<vers.length;i++){
            if(color[vers[i]] === Colors.WHITE){
                queue.enqueue(vers[i])
                color[vers[i]] = Colors.GREY
            }
        }
        color[u] = Colors.BLACK
        if(callback){
            callback(u)
        }
    }
}
const printVertex = (value) => console.log('Visited vertex: ' + value); // {15} 
breadthFirstSearch(graph, myVertices[0], printVertex);

// 使用BFS查找最短路径
const BFS = (graph, startVertex,) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const distances = {}
    const predecessors = {}
    for(let n of vertices){
        distances[n] = 0
        predecessors[n] = null
    }
    const queue = new Queue()
    queue.enqueue(startVertex)
    color[startVertex] = Colors.GREY
    while(!queue.isEmpty()){
        const u = queue.dequeue()
        const neighbors = adjList.get(u)
        for(let n of neighbors){
            // console.log('n', n)
            // console.log('color[n]', color[n])
            if(color[n] === Colors.WHITE){
                color[n] = Colors.GREY
                distances[n] = distances[u] + 1
                predecessors[n] = u
                queue.enqueue(n)
            }
        }
        color[u] = Colors.BLACK
    }
    return {
        distances,
        predecessors
    }
}

const shortestPathA = BFS(graph, myVertices[0])
console.log('shortestPathA', shortestPathA)
// const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12} 
// distances: [A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2 , I: 3], 
// predecessors: [A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H: "D", I: "E"]
const fromVertex = myVertices[0]; // {9} 
for (i = 1; i < myVertices.length; i++) { // {10} 
    const toVertex = myVertices[i]; // {11} 
    const path = new Stack(); // {12} 
    for (let v = toVertex; 
        v !== fromVertex; 
        v = shortestPathA.predecessors[v]) { // {13} 
        path.push(v); // {14} 
    } 
    path.push(fromVertex); // {15} 
    let s = path.pop(); // {16} 
    while (!path.isEmpty()) { // {17} 
        s += ' - ' + path.pop(); // {18} 
    } 
    console.log(s); // {19} 
}
const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    for(let vertex of vertices){
        if(color[vertex] === Colors.WHITE){
            depthFirstSearchVisit(vertex, color, adjList, callback)
        }
    }
}

const depthFirstSearchVisit = (vertex, color, adjList, callback) => {
    color[vertex] = Colors.GREY
    if(callback){
        callback(vertex)
    }
    const neighbors = adjList.get(vertex)
    for(let n of neighbors){
        if(color[n] === Colors.WHITE){
            depthFirstSearchVisit(n, color, adjList, callback)
        }
    }
    color[vertex] = Colors.BLACK
}
depthFirstSearch(graph, printVertex);








// const DFS = graph => { 
//     const vertices = graph.getVertices(); 
//     const adjList = graph.getAdjList(); 
//     const color = initializeColor(vertices); 
//     const d = {}; 
//     const f = {}; 
//     const p = {}; 
//     const time = { count : 0}; // {1} 
//         for (let i = 0; i < vertices.length; i++) { // {2} 
//             f[vertices[i]] = 0; 
//             d[vertices[i]] = 0; 
//             p[vertices[i]] = null; 
//         } 
//         for (let i = 0; i < vertices.length; i++) { 
//             if (color[vertices[i]] === Colors.WHITE) { 
//                 DFSVisit(vertices[i], color, d, f, p, time, adjList); 
//             } 
//         } 
//         return { // {3} 
//             discovery: d, 
//             finished: f, 
//             predecessors: p 
//         }; 
//    }; 
//    const DFSVisit = (u, color, d, f, p, time, adjList) => { 
//         color[u] = Colors.GREY; 
//         d[u] = ++time.count; // {4} 
//         const neighbors = adjList.get(u); 
//         for (let i = 0; i < neighbors.length; i++) { 
//             const w = neighbors[i]; 
//             if (color[w] === Colors.WHITE) { 
//                 p[w] = u; // {5} 
//                 DFSVisit(w, color, d, f, p, time, adjList); 
//             } 
//         } 
//         color[u] = Colors.BLACK; 
//         f[u] = ++time.count; // {6} 
//    };

//    console.log('DFS(graph)', DFS(graph))


var grapha = [
    [0, 2, 4, 0, 0, 0], 
    // A 接触点(0 - 1)
    // [0, 2, 4，INF, INF, INF] 
    // [true, false, false, false, false, false,]
    // minIndex 0    dist[minIndex] = 0
    [0, 0, 2, 4, 2, 0], 
    // B 接触点(0 - 1 - 2)
    // [0, 2, 4，6, 4, INF] 
    // [true, true, false, false, false, false,]
    // minIndex 1  dist[minIndex] = 2
    [0, 0, 0, 0, 3, 0], 
    // C 接触点
    // [0, 2, 4，6, 4, 6]
    // [true, true, true, false, true, false,]
    // minIndex 2 dist[minIndex] = 4
    [0, 0, 0, 0, 0, 2], 
    // D 接触点
    // [0, 2, 4，6, 4, 6] 
    // [true, true, true, true, true, false,]
    // minIndex 3 _ dist[minIndex] = 6
    [0, 0, 0, 3, 0, 2], 
    // E 接触点
    // [0, 2, 4，6, 4, 6] 
    // [true, true, false, false, true, false,]
    // minIndex 4 _ dist[minIndex] = 4
    [0, 0, 0, 0, 0, 0]
    // F 接触点
    // [0, 2, 4，6, 4, 6] 
    // [true, true, true, true, true, true,]
    // minIndex 5 _ dist[minIndex] = 6
];

const INF = Number.MAX_SAFE_INTEGER; 
const dijkstra = (graph, src) => { 
    const dist = []; 
    const visited = []; 
    const { length } = graph; 
    for (let i = 0; i < length; i++) { // {1} 
        dist[i] = INF; 
        visited[i] = false; 
    } 
    dist[src] = 0; // {2} 
    for (let i = 0; i < length - 1; i++) { // {3} 
        const u = minDistance(dist, visited); // {4} 
        visited[u] = true; // {5} 
        console.log('u', u)
        for (let v = 0; v < length; v++) { 
            console.log('dist[u]', dist[u])
            if (!visited[v] && 
                graph[u][v] !== 0 && 
                dist[u] !== INF && 
                dist[u] + graph[u][v] < dist[v]
                ) { // {6} 
                dist[v] = dist[u] + graph[u][v]; // {7} 
            }
        }
        console.log('dist', JSON.stringify(dist))
        console.log('visited', JSON.stringify(visited))
    }
    return dist; // {8} 
};

const minDistance = (dist, visited) => { 
    let min = INF; 
    let minIndex = -1; 
    for (let v = 0; v < dist.length; v++) { 
        if (visited[v] === false && dist[v] <= min) { 
            min = dist[v]; 
            minIndex = v; 
        } 
    } 
    return minIndex; 
};

console.log('dijkstra', dijkstra(grapha, 0))


const floydWarshall = graph => { 
    console.log('init floydWarshall', graph)
    const dist = []; 
    const { length } = graph; 
    for (let i = 0; i < length; i++) { // {1} 
        dist[i] = []; 
        for (let j = 0; j < length; j++) { 
            if (i === j) { 
                dist[i][j] = 0; // {2} 
            } else if (graph[i][j] === 0) { 
                dist[i][j] = INF; // {3} 
            } else { 
                // console.log('graph[i][j]', graph[i][j])
                dist[i][j] = graph[i][j]; // {4} 
            } 
        } 
    } 
    console.log('graph dist', JSON.stringify(dist))
    for (let k = 0; k < length; k++) { // {5} 
        for (let i = 0; i < length; i++) { 
            for (let j = 0; j < length; j++) { 
                // console.log('i',i ,'_____k',k, 'dist[i][k]', dist[i][k] )
                // console.log('j',j ,'_____k',k, 'dist[k][j]', dist[k][j] )
                // console.log('i',i ,'_____j',j, 'dist[k][j]', dist[i][j] )
                if (dist[i][k] + dist[k][j] < dist[i][j]) { // {6} 
                    // console.info('dist[i][k] + dist[k][j] < dist[i][j]', dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j]; // {7} 
                    console.info('dist', JSON.stringify(dist))
                } 
            } 
        } 
    } 
    return dist; 
   };
   const graphP = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
  ];

   console.log('floydWarshall', floydWarshall(grapha))

//    Prim 算法如下所示。

const prim = graph => { 
    const parent = []; 
    const key = []; 
    const visited = []; 
    const { length } = graph; 
    for (let i = 0; i < length; i++) { // {1} 
        key[i] = INF; 
        visited[i] = false; 
    } 
    key[0] = 0; // {2} 
    parent[0] = -1; 
    for (let i = 0; i < length - 1; i++) { // {3} 
        const u = minKey(graph, key, visited); // {4} 
        console.log('prim u', u)
        visited[u] = true; // {5} 
        for (let v = 0; v < length; v++) { 
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) { // {6} 
                // console.log('graph[u][v]', graph[u][v])
                // console.log('key[v]', key[v])
                parent[v] = u; // {7} 
                key[v] = graph[u][v]; // {8} 
            }
        } 
        console.log('key', key)
    } 
    console.log('parent', parent)
    console.log('prim key', key)
    return parent; // {9} 
};

const minKey = (graph, key, visited) => {
    // Initialize min value
    let min = INF;
    let minIndex = 0;
    for (let v = 0; v < graph.length; v++) {
      if (visited[v] === false && key[v] < min) {
        min = key[v];
        minIndex = v;
      }
    }
    return minIndex;3
};
  
  console.log('prim', prim(graphP))