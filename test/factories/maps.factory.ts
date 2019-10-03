import jsf from './json-schema-faker.wrapper';
import { project } from 'src/core/shared/projects/model/projects.model';
import { map } from 'src/core/shared/maps/model/map.model';


function getSimpleMapSchema() {
    return {
        type: "object",
        properties: {
            _id: {
                type: "string",
                format: "mongoID"
            },
            name: {
                type: "string",
                chance: {
                    word: {
                        length: 10
                    }
                }
            }
        },
        required: ['_id', 'name'],
    };
}

function generateSimpleMap() {
    return jsf.generate(getSimpleMapSchema());
}

async function createMap(projectId, mapName) {
    const generatedMap = generateSimpleMap();
    generatedMap.name = mapName || generatedMap.name;
    try {
        const newMap = await map.create(generatedMap);
        await addMapToProject(projectId, newMap.id);
        return newMap;
    } catch (err) {
        return err;
    }
}

async function addMapToProject(projectId, mapId) {
    try {
        await project.findByIdAndUpdate(
            { _id: projectId },
            { $push: { maps: mapId } }
        );
    } catch (err) {
        return err;
    }
}

function generateMany() {
    return jsf.generate({
        type: 'array',
        items: getSimpleMapSchema(),
        maxItems: 15,
        minItems:    5
    });
}

module.exports = {
    createMap,
    generateSimpleMap,
    generateMany,
    addMapToProject,
};
