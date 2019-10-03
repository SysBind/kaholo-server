export function randomIdx(length: number) {
    return Math.floor(Math.random() * length);
}

// export function connectToSocket(url = 'http://localhost:3000/') {
//     const io = socket(url);
//     console.log(url, 332121)
//     return new Promise(resolve => {
//         io.on('connect', () => {
//             resolve(io);
//         });
//     });
// }

// export async function generateMapAndProject() {
//     const mapStructureTestDataManager = new TestDataManager(MapStructure);
//     const projectTestDataManager = new TestDataManager(ProjectModel);
//     const projects = await projectTestDataManager.generateInitialCollection(
//         projectsFactory.generateProjects()
//     );

//     const randomIndex = randomIdx(projectTestDataManager.collection.length);
//     const project = projectTestDataManager.collection[randomIndex];

//     const map = await mapsFactory.createMap(project.id, "random map name");
//     const mapStructures = await mapStructureTestDataManager.generateInitialCollection(
//         mapStructureFactory.generateMany(map._id.toString(), [map])
//     );
//     return {
//         map,
//         projects,
//         mapStructures
//     };
// }