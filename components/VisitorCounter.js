// pages/api/increment.js

import fs from 'fs';
import { stringify } from 'querystring';

const filePath = './path-to-visitorCount.txt'; // Replace with the actual file path

function getVisitors(callback) {
    fs.readFile("./components/visitors.txt", "utf-8", callback);
    return  callback() + "+";
}

export {getVisitors}
