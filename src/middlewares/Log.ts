/**
 * Crea y mantiene el registro
 */
import * as fs from 'fs';
import * as path from 'path';

class Log{
  public baseDir: string;
	public fileName: string;
	public linePrefix: string;

	public today: Date = new Date();

	constructor() {
		let _dateString = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)}-${this.today.getDate()}`;
		let _timeString = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;

		this.baseDir = path.join(__dirname, '../../.logs/');

		this.fileName = `${_dateString}.log`;
		this.linePrefix = `[${_dateString} ${_timeString}]`;
	}

	// Añade el prefijo INFO a la cadena de registro
	public info (_string: string): void {
		this.addLog('INFO', _string);
	}

	// Añade el prefijo WARN a la cadena de registro
	public warn (_string: string): void {
		this.addLog('WARN', _string);
	}

	// Añade el prefijo ERROR a la cadena de registro
	public error (_string: string): void {
		// Romper la línea y mostrar la primera línea
		console.log('\x1b[31m%s\x1b[0m', '[ERROR] :: ' + _string.split(/r?\n/)[0]);

		this.addLog('ERROR', _string);
	}

	// Añade la cadena de prefijo personalizada a la cadena de registro
	public custom (_filename: string, _string: string): void {
		this.addLog(_filename, _string);
	}

	/**
	 * Crea el archivo si no existe, y
	 * añade el tipo de registro y la cadena en el archivo.
	 */
	private addLog (_kind: string, _string: string): void {
		const _that = this;
		_kind = _kind.toUpperCase();

		fs.open(`${_that.baseDir}${_that.fileName}`, 'a', (_err, _fileDescriptor) => {
			if (!_err && _fileDescriptor) {
				// Anexar al archivo y cerrarlo
				fs.appendFile(_fileDescriptor, `${_that.linePrefix} [${_kind}] ${_string}\n`, (_err) => {
					if (! _err) {
						fs.close(_fileDescriptor, (_err) => {
							if (! _err) {
								return true;
							} else {
								return console.log('\x1b[31m%s\x1b[0m', 'Error closing log file that was being appended');
							}
						});
					} else {
						return console.log('\x1b[31m%s\x1b[0m', 'Error appending to the log file');
					}
				});
			} else {
				return console.log('\x1b[31m%s\x1b[0m', 'Error cloudn\'t open the log file for appending');
			}
		});
	}
}
export default new Log;
