export interface Answer {
  score: number,
  a: string,
  b: string,
  c: string,
  d?: string,
  e?: string,
  f?: string
}

export interface ListQuestion {
  question: string,
  answer: Answer[]
}

export interface Result {
  [key: string]: string
}

export interface DataType {
  listQuestion: ListQuestion[]
  result: Result
}