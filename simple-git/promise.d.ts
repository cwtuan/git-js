import * as errors from './typings/errors';
import * as types from './typings/types';
import * as resp from './typings/response';
import * as simpleGit from './typings/simple-git';

/**
 * @deprecated
 *
 * simple-git has supported promises / async await since version 2.6.0.
 * Importing from 'simple-git/promise' has been deprecated and will be
 * removed by July 2022.
 *
 * To upgrade, change all 'simple-git/promise' imports to just 'simple-git'
 */
declare const simplegit: simplegit.SimpleGitExport;

declare namespace simplegit {

   type SimpleGitExport = ((basePath?: string) => simplegit.SimpleGit) & {
      CleanOptions: typeof types.CleanOptions
   };

   /**
    * @deprecated
    *
    * simple-git has supported promises / async await since version 2.6.0.
    * Importing from 'simple-git/promise' has been deprecated and will be
    * removed by July 2022.
    *
    * To upgrade, change all 'simple-git/promise' imports to just 'simple-git'
    */
   type SimpleGit = simpleGit.SimpleGit;

   // errors
   type GitError = errors.GitError;
   type GitConstructError = errors.GitConstructError;
   type GitResponseError<T> = errors.GitResponseError<T>;
   type TaskConfigurationError = errors.TaskConfigurationError;

   // responses
   type BranchSummary = resp.BranchSummary
   type CleanSummary = resp.CleanSummary;
   type CleanMode = types.CleanMode;
   type DiffResult = resp.DiffResult;
   type FetchResult = resp.FetchResult;
   type CommitResult = resp.CommitResult;
   type MergeResult = resp.MergeResult;
   type PullResult = resp.PullResult;
   type StatusResult = resp.StatusResult;
   type TagResult = resp.TagResult;

   // types
   type outputHandler = types.outputHandler
   type LogOptions<T = types.DefaultLogFields> = types.LogOptions<T>;
   type Options = types.Options;

   // deprecated
   /** @deprecated use MergeResult */
   type MergeSummary = resp.MergeSummary;
   /** @deprecated use CommitResult */
   type CommitSummary = resp.CommitResult;
}

/**
 * @deprecated
 *
 * simple-git has supported promises / async await since version 2.6.0.
 * Importing from 'simple-git/promise' has been deprecated and will be
 * removed by July 2022.
 *
 * To upgrade, change all 'simple-git/promise' imports to just 'simple-git'
 */
export = simplegit;
