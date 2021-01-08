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