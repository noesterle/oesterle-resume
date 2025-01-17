import Image from "next/image";
import Resume from "./ui/Resume";
import {readFileSync} from 'fs';
import {load} from 'js-yaml';


export default function Home() {
  var doc = null
  try {
    doc = load(readFileSync('data/resume.yml', 'utf8'));
    // console.log(doc);
  } catch (e) {
    // console.log(e);
  }
  // console.log(doc)
  return (
    <Resume resume={doc}></Resume>
  );
}
