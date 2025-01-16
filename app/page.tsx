import Image from "next/image";
import Resume from "./ui/Resume";
import {fs} from 'fs';


export default function Home() {
  const yaml = require('js-yaml');
  const fs   = require('fs');
  var doc = null
  try {
    doc = yaml.load(fs.readFileSync('data/resume.yml', 'utf8'));
    // console.log(doc);
  } catch (e) {
    // console.log(e);
  }
  // console.log(doc)
  return (
    <Resume resume={doc}></Resume>
  );
}
