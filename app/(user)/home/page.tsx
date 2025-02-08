import EventList from "@/components/home/events/event-list/event-list.component";
import Markdown from "react-markdown";

export default function HomePage() {
  return (
    <>
      <EventList />{" "}
      <Markdown>{`
# React Markdown Example

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)
`}</Markdown>
    </>
  );
}
