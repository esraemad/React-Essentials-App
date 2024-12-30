import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section title="Core Concept" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((coreItem) => (
          <CoreConcept key={coreItem.title} {...coreItem} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
      </ul>
    </Section>
  );
}
