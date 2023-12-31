import { ArticleService, mockArticleDto, mockResourceDto } from '@blog/data/server';
import type { Meta, StoryObj } from '@storybook/react';
import { Suspense } from 'react';
import { createMock } from 'storybook-addon-module-mock';

import { Article } from './article';

const meta: Meta<typeof Article> = {
  component: Article,
  title: 'articles / Article',
  decorators: [
    (story) => {
      return <Suspense>{story()}</Suspense>;
    },
  ],
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(ArticleService, 'findOne');
        mock.mockReturnValue(mockResourceDto(mockArticleDto));
        return [mock];
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Primary: Story = {
  args: {
    id: 1,
  },
};
