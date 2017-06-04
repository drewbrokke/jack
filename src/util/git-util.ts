import { ChildProcess, spawn, spawnSync, SpawnSyncReturns } from 'child_process';

export function getCommitContentSync(sha: string): string {
	const gitShowProcess: SpawnSyncReturns<string> = spawnSync(
		'git',
		[
			'show',
			'--color',
			sha,
		],
		{
			encoding: 'utf8',
		},
	);

	return gitShowProcess.output.join('\n');
}

export function getGitLogProcess(args: string[]): ChildProcess {
	return spawn(
		'git',
		[
			'log',
			'--color=always',
			...args,
		],
	);
}
