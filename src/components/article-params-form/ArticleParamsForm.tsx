import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	OptionType,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

type TArticleParamsFormProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	changeStyles: () => void;
	resetStyles: () => void;
};

export const ArticleParamsForm = ({
	isOpen,
	setIsOpen,
	changeStyles,
	resetStyles,
}: TArticleParamsFormProps) => {
	const [activeParams, setActiveParams] = useState({
		fontFamilyOption: fontFamilyOptions[0],
		fontColor: fontColors[0],
		backgroundColor: backgroundColors[0],
		contentWidth: contentWidthArr[0],
		fontSizeOption: fontSizeOptions[0],
	});

	const handleArrowClick = () => {
		setIsOpen(!isOpen);
	};

	const classNames = [styles.container, isOpen ? styles.container_open : ''];

	const handleFontFamilyChange = (value: OptionType) => {
		setActiveParams({
			...activeParams,
			fontFamilyOption: value,
		});
	};

	const handleFontSizeChange = (value: OptionType) => {
		setActiveParams({
			...activeParams,
			fontSizeOption: value,
		});
	};

	const handleFontColorChange = (value: OptionType) => {
		setActiveParams({
			...activeParams,
			fontColor: value,
		});
	};

	const handleBackgroundColorChange = (value: OptionType) => {
		setActiveParams({
			...activeParams,
			backgroundColor: value,
		});
	};

	const handleContentWidthChange = (value: OptionType) => {
		setActiveParams({
			...activeParams,
			contentWidth: value,
		});
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleArrowClick} />
			<aside className={classNames.join(' ')}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						options={fontFamilyOptions}
						selected={activeParams.fontFamilyOption}
						onChange={handleFontFamilyChange}
					/>
					<RadioGroup
						title={'Размер шрифта'}
						options={fontSizeOptions}
						selected={activeParams.fontSizeOption}
						name={'Размер шрифта'}
						onChange={handleFontSizeChange}
					/>
					<Select
						title={'Цвет шрифта'}
						options={fontColors}
						selected={activeParams.fontColor}
						onChange={handleFontColorChange}
					/>
					<Separator />
					<Select
						title={'Цвет фона'}
						options={backgroundColors}
						selected={activeParams.backgroundColor}
						onChange={handleBackgroundColorChange}
					/>
					<Select
						title={'Ширина контента'}
						options={contentWidthArr}
						selected={activeParams.contentWidth}
						onChange={handleContentWidthChange}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={resetStyles}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={changeStyles}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
