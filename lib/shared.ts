
export interface QuestionDefinition {
	id: string
	question: string;
	type: QuestionType;
	required: boolean;
	options: {
		id: string;
		value: string;
		label: string;
		requireSpecification: boolean;
	}[]
}

export type QuestionType = 'radio' | 'checkbox' | 'text' | 'textarea' | 'number' | 'date' | 'district'

export interface QuestionValue {
	value?: string;
	specification?: string;
	values?: {
		value: string;
		specification?: string;
	}[];
}


export type Districts = {
	id: string;
	name: string;
}[];

export type Languages = {
	id: string;
	name: string;
}[];

export interface PublicQueryResult {
	offerTypes: {
		id: string;
		name: string;
		infoText: string;
		questions: QuestionDefinition[];
	}[];
	districts: Districts;
	languages: Languages;
}

export interface RegisterFormState {
	name: string;
	organization: string,
	phone: string
	email: string
	contactHours: string,
	expertise: string
	languages: string[],
	offers: {
		[id: string]: {
			questions: {
				[id: string]: QuestionValue
			}
		}
	}
}

export type Error = { input: 'question'; questionId: string; message: string } | { input: 'email'; message: string } | { input: 'offer'; message: string } | { input: 'languages'; message: string }

export const publicQuery = `
	offerTypes: listOfferType(orderBy: [{ order: asc }]) {
		id
		name
		infoText

		questions {
			id
			question
			type
			required
			options {
				id
				value
				label
				requireSpecification
			}
		}
	}

	languages: listLanguage(orderBy: [{ order: asc }]) {
		id
		name
	}

	districts: listDistrict(orderBy: [{name: asc}]) {
		id
		name
	}
`