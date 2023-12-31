import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListing } from './article-listing';
import { Suspense } from 'react';
import { createMock } from 'storybook-addon-module-mock';
import {
  ArticleService,
  mockArticleDto,
  mockResourceDto,
} from '@blog/data/server';

const meta: Meta<typeof ArticleListing> = {
  component: ArticleListing,
  title: 'articles / ArticleListing',
  decorators: [
    (story) => {
      return <Suspense>{story()}</Suspense>;
    },
  ],
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(ArticleService, 'find');
        mock.mockReturnValue(
          mockResourceDto([
            { ...mockArticleDto, id: 1 },
            { ...mockArticleDto, id: 2 },
            { ...mockArticleDto, id: 3 },
            { ...mockArticleDto, id: 4 },
            { ...mockArticleDto, id: 5 },
            { ...mockArticleDto, id: 6 },
            { ...mockArticleDto, id: 7 },
            { ...mockArticleDto, id: 8 },
            { ...mockArticleDto, id: 9 },
          ]),
        );
        return [mock];
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleListing>;

export const Primary: Story = {
  args: {},
};
