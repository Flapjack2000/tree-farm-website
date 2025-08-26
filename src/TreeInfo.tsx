import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function TreeInfo() {

  return (
    <>
      <Accordion className="ml-4 mr-4" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer font-bold">Blue Spruce</AccordionTrigger>
          <AccordionContent className="flex flex-col items-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ratione totam reprehenderit porro? Ipsam enim eligendi praesentium at ut error sint animi, quo, blanditiis iusto dolorem minus in, qui recusandae.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer font-bold">Canaan Fir</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos fugiat voluptate sint ad nemo accusamus consectetur sed voluptatem iusto eaque perspiciatis sequi deleniti, libero vel deserunt. Nesciunt, dicta modi?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer font-bold">White Spruce</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint similique dolores magnam at debitis modi quasi temporibus odio, suscipit nisi ducimus cupiditate officia natus sit possimus sunt? Iste, officia non!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default TreeInfo