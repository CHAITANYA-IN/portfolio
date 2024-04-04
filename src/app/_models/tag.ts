export class Tag {
    static readonly ANGULAR = new Tag('angular', 'mistyrose');
    static readonly REACTJS = new Tag('reactjs', 'lawngreen');
    static readonly NODEJS = new Tag('nodejs', 'violet');
    static readonly EXPRESSJS = new Tag('expressjs', 'sienna');
    static readonly C = new Tag('c', 'black');
    static readonly CPP = new Tag('cpp++', 'saddlebrown');
    static readonly JAVA = new Tag('java', 'chocolate');
    static readonly JS = new Tag('js', 'lightblue');
    static readonly TS = new Tag('ts', 'darkmagenta');
    static readonly DJANGO = new Tag('django', 'lightslategrey');
    static readonly SHELL = new Tag('shell', 'rosybrown');
    static readonly PYTHON = new Tag('python', 'darkorchid');
    static readonly CHASH = new Tag('chash#', 'mediumturquoise');
    static readonly GIT = new Tag('git', 'navajowhite');
    static readonly MAKEFILE = new Tag('makefile', 'darkviolet');
    static readonly LISP = new Tag('lisp', 'thistle');
    static readonly PROLOG = new Tag('prolog', 'lightcyan');
    static readonly HTML = new Tag('html', 'cadetblue');
    static readonly CSS = new Tag('css', 'slategrey');
    static readonly XV6 = new Tag('xv6', 'papayawhip');
    static readonly LEX = new Tag('lex', 'khaki');
    static readonly YACC = new Tag('yacc', 'sandybrown');
    static readonly SED = new Tag('sed', 'slateblue');
    static readonly AWK = new Tag('awk', 'teal');
    static readonly CONF = new Tag('conf', 'lightskyblue');
    static readonly NGINX = new Tag('nginx', 'lightpink');
    static readonly APACHE = new Tag('apache', 'forestgreen');
    static readonly PHP = new Tag('php', 'wheat');
    static readonly SQL = new Tag('sql', 'royalblue');
    static readonly SQLITE = new Tag('sqlite', 'coral');
    static readonly MYSQL = new Tag('mysql', 'blanchedalmond');
    static readonly POSTGRESQL = new Tag('postgresql', 'darkslategray');
    static readonly MONGO = new Tag('mongo', 'silver');
    static readonly REGEX = new Tag('regex', 'beige');
    static readonly JUPYTER = new Tag('jupyter', 'tomato');
    static readonly SCALA = new Tag('scala', 'blue');
    static readonly HASKELL = new Tag('haskell', 'lightsalmon');
    static readonly GO = new Tag('go', 'turquoise');
    static readonly RUST = new Tag('rust', 'mediumpurple');
    static readonly QT = new Tag('qt', 'dodgerblue');
    static readonly REGO = new Tag('rego', 'burlywood');
    static readonly P5 = new Tag('p5', 'lime');
    static readonly KERNEL_PROGRAMMING = new Tag('kernel_programming', 'steelblue');
    static readonly SOCKET_PROGRAMMING = new Tag('socket_programming', 'darkblue');
    static readonly EJS = new Tag('ejs', 'blueviolet');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}