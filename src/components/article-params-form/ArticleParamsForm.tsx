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
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import clsx from 'clsx';

type TArticleParamsFormProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	activeParamsMain: ArticleStateType;
	changeActiveStyles: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({
	isOpen,
	setIsOpen,
	activeParamsMain,
	changeActiveStyles,
}: TArticleParamsFormProps) => {
	const rootRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onChange: setIsOpen,
	});

	const [activeParams, setActiveParams] =
		useState<ArticleStateType>(activeParamsMain);

	const handleArrowClick = () => {
		setIsOpen(!isOpen);
	};

	const resetStyles = () => {
		changeActiveStyles(defaultArticleState);
	};

	const handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		changeActiveStyles(activeParams);
	};

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

	useEffect(() => {
		setActiveParams(activeParamsMain);
	}, [activeParamsMain]);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleArrowClick} />
			{isOpen && (
				<aside
					className={clsx(styles.container, {
						[styles.container_open]: isOpen,
					})}
					ref={rootRef}>
					<form className={styles.form} onSubmit={handleFormSubmit}>
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
							<Button title='Применить' htmlType='submit' type='apply' />
						</div>
					</form>
				</aside>
			)}
		</>
	);
};
