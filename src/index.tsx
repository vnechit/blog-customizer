import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';
import { useState } from 'react';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [activeStyles, setStyles] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': activeStyles.fontFamilyOption.value,
					'--font-size': activeStyles.fontSizeOption.value,
					'--font-color': activeStyles.fontColor.value,
					'--container-width': activeStyles.contentWidth.value,
					'--bg-color': activeStyles.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				activeParamsMain={activeStyles}
				changeActiveStyles={setStyles}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
