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

type TArticleParamsFormProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ArticleParamsForm = ({
	isOpen,
	setIsOpen,
}: TArticleParamsFormProps) => {
	const handleArrowClick = () => {
		setIsOpen(!isOpen);
	};

	const classNames = [styles.container, isOpen ? styles.container_open : ''];

	const handleFontFamilyChange = (value: OptionType) => {
		console.log(value);
	};

	const handleFontSizeChange = (value: OptionType) => {
		console.log(value);
	};

	const handleFontColorChange = (value: OptionType) => {
		console.log(value);
	};

	const handleBackgroundColorChange = (value: OptionType) => {
		console.log(value);
	};

	const handleContentWidthChange = (value: OptionType) => {
		console.log(value);
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
						selected={fontFamilyOptions[0]}
						onChange={handleFontFamilyChange}
					/>
					<RadioGroup
						title={'Размер шрифта'}
						options={fontSizeOptions}
						selected={fontSizeOptions[0]}
						name={'Размер шрифта'}
						onChange={handleFontSizeChange}
					/>
					<Select
						title={'Цвет шрифта'}
						options={fontColors}
						selected={fontColors[0]}
						onChange={handleFontColorChange}
					/>
					<Separator />
					<Select
						title={'Цвет фона'}
						options={backgroundColors}
						selected={backgroundColors[0]}
						onChange={handleBackgroundColorChange}
					/>
					<Select
						title={'Ширина контента'}
						options={contentWidthArr}
						selected={contentWidthArr[0]}
						onChange={handleContentWidthChange}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
