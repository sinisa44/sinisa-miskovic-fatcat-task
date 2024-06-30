import React from 'react';

import{ Layout} from '@homework-task/components/Layout';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import { Hero } from '@homework-task/components/Hero';

import PageGenerator from '@homework-task/components/PageGenerator';

const PageGeneratorPage = () => {

    const data = [
        {
          type: 'layoutSection',
          props: { backgroundColor: 'lightblue' },
          components: [
            {
              type: 'componentHero',
              props: { title: 'Welcome to our website', image: '/media/hero.png' },
            },
          ],
        },
        {
          type: 'layoutSection',
          props: { backgroundColor: 'lightgray' },
          components: [
            {
              type: 'componentItemsShowcase',
              props: { items: [{
                title:'item 1',
                description:'item 1 description',

              },
            {
              title:'item 2',
              description:'item 2 description',
            }] },
            },
            {
              type: 'componentTrustBar',
              props: { images: [
                '/media/cats/cat_1.png',
                '/media/cats/cat_2.png',
                '/media/cats/cat_3.png',
                '/media/cats/cat_4.png',
                '/media/cats/cat_5.png',
                '/media/cats/cat_6.png',
                '/media/cats/cat_7.png',
                '/media/cats/cat_8.png',
                '/media/cats/cat_9.png',
                '/media/cats/cat_10.png',
              ] },
            },
          ],
        },
      ];
    return <div>
        <Layout background="bg-black">
             <PageGenerator data={data} />
        </Layout>
    </div>;
};

export default PageGeneratorPage;
