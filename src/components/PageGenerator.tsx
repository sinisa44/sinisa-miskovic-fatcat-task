import React from 'react';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
interface ComponentProps {
  type: string;
  props: any;
}

interface SectionProps {
  type: string;
  props: any;
  components: ComponentProps[];
}

interface PageGeneratorProps {
  data: SectionProps[];
}

const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {

  return (
    <div>
      {data.map((section, index) => (
        <div key={index} style={{ backgroundColor: section.props.backgroundColor }}>
          {section.components.map((component, cIndex) => {
            switch (component.type) {
              case 'componentHero':
                return <Hero key={cIndex} {...component.props} />;
              case 'componentItemsShowcase':
                return <ItemsShowcase key={cIndex} {...component.props} />;
              case 'componentTrustBar':
                return <TrustBar key={cIndex} {...component.props} />;
              default:
                return null;
            }
          })}
        </div>
      ))}
    </div>
  );
}
export default PageGenerator;