'use client';
import React from 'react';
import { Frame } from 'lucide-react';

const defaultLinks = [
	{ title: 'Home', href: '#home' },
	{ title: 'About', href: '#about' },
	{ title: 'Projects', href: '#projects' },
	{ title: 'Contact', href: '#contact' },
];

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="w-full border-t border-slate-100 bg-white py-12">
			<div className="container-custom grid grid-cols-1 gap-10 md:grid-cols-3 md:items-center">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200">
						<Frame className="size-6" />
					</div>
					<div>
						<div className="font-black text-slate-900 leading-none mb-1">Kavishka Sandaruwan</div>
						<div className="text-xs font-black text-violet-600 uppercase tracking-widest">System Architect</div>
					</div>
				</div>

				<nav className="flex justify-center gap-8">
					{defaultLinks.map((l) => (
						<a key={l.href} href={l.href} className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
							{l.title}
						</a>
					))}
				</nav>

				<div className="flex flex-col items-start md:items-end gap-4">
					<div className="flex items-center gap-6">
						<a href="https://github.com/" aria-label="GitHub" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110">
							<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.92.43.371.823 1.102.823 2.222 0 1.606-.014 2.902-.014 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
						</a>
						<a href="https://twitter.com/" aria-label="Twitter" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110">
							<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482A13.944 13.944 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723 4.9 4.9 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.946 4.817 4.902 4.902 0 0 1-2.212.084 4.917 4.917 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 21.5c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" /></svg>
						</a>
					</div>
					<div className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">
						© {year} <span className="text-slate-400">Archived Deployment</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
