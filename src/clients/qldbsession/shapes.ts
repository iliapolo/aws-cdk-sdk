/**
 * @schema SendCommandRequest
 */
export interface SendCommandRequest {
  /**
   * @schema SendCommandRequest#SessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema SendCommandRequest#StartSession
   */
  readonly startSession?: StartSessionRequest;

  /**
   * @schema SendCommandRequest#StartTransaction
   */
  readonly startTransaction?: StartTransactionRequest;

  /**
   * @schema SendCommandRequest#EndSession
   */
  readonly endSession?: EndSessionRequest;

  /**
   * @schema SendCommandRequest#CommitTransaction
   */
  readonly commitTransaction?: CommitTransactionRequest;

  /**
   * @schema SendCommandRequest#AbortTransaction
   */
  readonly abortTransaction?: AbortTransactionRequest;

  /**
   * @schema SendCommandRequest#ExecuteStatement
   */
  readonly executeStatement?: ExecuteStatementRequest;

  /**
   * @schema SendCommandRequest#FetchPage
   */
  readonly fetchPage?: FetchPageRequest;

}

/**
 * @schema SendCommandResult
 */
export interface SendCommandResult {
  /**
   * @schema SendCommandResult#StartSession
   */
  readonly startSession?: StartSessionResult;

  /**
   * @schema SendCommandResult#StartTransaction
   */
  readonly startTransaction?: StartTransactionResult;

  /**
   * @schema SendCommandResult#EndSession
   */
  readonly endSession?: EndSessionResult;

  /**
   * @schema SendCommandResult#CommitTransaction
   */
  readonly commitTransaction?: CommitTransactionResult;

  /**
   * @schema SendCommandResult#AbortTransaction
   */
  readonly abortTransaction?: AbortTransactionResult;

  /**
   * @schema SendCommandResult#ExecuteStatement
   */
  readonly executeStatement?: ExecuteStatementResult;

  /**
   * @schema SendCommandResult#FetchPage
   */
  readonly fetchPage?: FetchPageResult;

}

/**
 * @schema StartSessionRequest
 */
export interface StartSessionRequest {
  /**
   * @schema StartSessionRequest#LedgerName
   */
  readonly ledgerName: string;

}

/**
 * @schema StartTransactionRequest
 */
export interface StartTransactionRequest {
}

/**
 * @schema EndSessionRequest
 */
export interface EndSessionRequest {
}

/**
 * @schema CommitTransactionRequest
 */
export interface CommitTransactionRequest {
  /**
   * @schema CommitTransactionRequest#TransactionId
   */
  readonly transactionId: string;

  /**
   * @schema CommitTransactionRequest#CommitDigest
   */
  readonly commitDigest: any;

}

/**
 * @schema AbortTransactionRequest
 */
export interface AbortTransactionRequest {
}

/**
 * @schema ExecuteStatementRequest
 */
export interface ExecuteStatementRequest {
  /**
   * @schema ExecuteStatementRequest#TransactionId
   */
  readonly transactionId: string;

  /**
   * @schema ExecuteStatementRequest#Statement
   */
  readonly statement: string;

  /**
   * @schema ExecuteStatementRequest#Parameters
   */
  readonly parameters?: ValueHolder[];

}

/**
 * @schema FetchPageRequest
 */
export interface FetchPageRequest {
  /**
   * @schema FetchPageRequest#TransactionId
   */
  readonly transactionId: string;

  /**
   * @schema FetchPageRequest#NextPageToken
   */
  readonly nextPageToken: string;

}

/**
 * @schema StartSessionResult
 */
export interface StartSessionResult {
  /**
   * @schema StartSessionResult#SessionToken
   */
  readonly sessionToken?: string;

}

/**
 * @schema StartTransactionResult
 */
export interface StartTransactionResult {
  /**
   * @schema StartTransactionResult#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * @schema EndSessionResult
 */
export interface EndSessionResult {
}

/**
 * @schema CommitTransactionResult
 */
export interface CommitTransactionResult {
  /**
   * @schema CommitTransactionResult#TransactionId
   */
  readonly transactionId?: string;

  /**
   * @schema CommitTransactionResult#CommitDigest
   */
  readonly commitDigest?: any;

}

/**
 * @schema AbortTransactionResult
 */
export interface AbortTransactionResult {
}

/**
 * @schema ExecuteStatementResult
 */
export interface ExecuteStatementResult {
  /**
   * @schema ExecuteStatementResult#FirstPage
   */
  readonly firstPage?: Page;

}

/**
 * @schema FetchPageResult
 */
export interface FetchPageResult {
  /**
   * @schema FetchPageResult#Page
   */
  readonly page?: Page;

}

/**
 * @schema ValueHolder
 */
export interface ValueHolder {
  /**
   * @schema ValueHolder#IonBinary
   */
  readonly ionBinary?: any;

  /**
   * @schema ValueHolder#IonText
   */
  readonly ionText?: string;

}

/**
 * @schema Page
 */
export interface Page {
  /**
   * @schema Page#Values
   */
  readonly values?: ValueHolder[];

  /**
   * @schema Page#NextPageToken
   */
  readonly nextPageToken?: string;

}
