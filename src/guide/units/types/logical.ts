import { css, l } from "../../../lib";
import { Paragraph } from "../../../paper-components/Paragraph";

import imgAlexey  from '../../../images/Alexei.jpg';
import { ExternalLink } from "../../../paper-components/ExternalLink";
import { FlexContainer } from "../../../paper-components/FlexContainer";
import { Plate, PlateHeaderColor } from "../../../paper-components/Plates";
import { Query } from "../../../paper-components/Query";
import { Reminder } from "../../../paper-components/Reminder";
import { SimpleText } from "../../../paper-components/SimpleText";
import { Table } from "../../../paper-components/Table";

export const logical = (_: HTMLDivElement) => {
    l(_, new Paragraph('ЗНАЧЕНИЯ', [
        new SimpleText('В выражениях или таблицах переменная типа boolean может принимать 3 значения:'),
        new FlexContainer([
            new Plate('TRUE', PlateHeaderColor.Black, 'Истинное значение, соответствует 1 в таблицах'),
            new Plate('FALSE', PlateHeaderColor.Black, 'Ложь, соответствует 0 в таблицах'),
            new Plate('NULL', PlateHeaderColor.Black, 'Переменная определена, но значение не задано'),
        ])
    ]))

    l(_, new Paragraph('ОПЕРАТОРЫ И ФУНКЦИИ', [
        new SimpleText('В БД на этом типе данных обычно определяют 3 оператора, также возвращающих boolean:'),
        new FlexContainer([
            new Plate('NOT', PlateHeaderColor.Green, `Логическое отрицание — инвертирует (меняет на противоположное) 
            булево значение выражения<br><br>Первый приоритет выполнения`),
            new Plate('AND', PlateHeaderColor.Green, `Логическое «И», конъюнкция — возвращает FALSE, если хотя бы одна из переменных FALSE<br><br>
            Второй приоритет выполнения`),
            new Plate('OR', PlateHeaderColor.Green, `Логическое «ИЛИ», дизъюнкция — возвращает TRUE, если хотя бы одна из переменных TRUE<br><br>
            Третий приоритет выполнения`),
        ]),
        new SimpleText('Именно так и никак иначе это работает для не null значений. Если же один из операндов выше имеет значение null, то оператор вернет null. Во избежание тавтологии, булевы функции определяют через таблицы как функции в 5 классе (или как там сейчас?):'),
        new FlexContainer([
            new Table([
                ['A', 1, 0],
                ['<p class="green">NOT</p> A', 0, 1]
            ]),
            new Table([
                ['A',1, 1, 0, 0], 
                ['B', 1, 0, 1, 0], 
                ['A <p class="green">AND</p> B', 1, 0, 0, 0],
                ['A <p class="green">OR</p> B', 1, 1, 1, 0]
            ])
        ]),
        new Reminder(`У логических операторов есть приоритет исполнения в выражении, а именно в следующем порядке: NOT, AND, OR. `),
        new SimpleText('Для того, чтобы изменить приоритет выполнения логических операторов, как и при всех других вычислениях, нужно использовать круглые скобки.'),
    ]))

    l(_, new Paragraph('БАЗИС', [
        new SimpleText('Возможно, если вы совсем не знакомы с дискретной математикой, у вас возникнет вопрос, почему именно эти 3 функции?'),
        new SimpleText('Дело в том что они образуют БАЗИС, то есть через их композицию выражается любая таблица истинности.'),
        new ExternalLink('Подробнее о базисе', 'https://neerc.ifmo.ru/wiki/index.php?title=%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B1%D1%83%D0%BB%D0%B5%D0%B2%D0%BE%D0%B9_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8')
    ]))
    l(_, new FlexContainer([
        // new Picture(imgAlexey)
    ]))
    l(_, new Query(`
select *, 
    2.14 as u, 
    '2025-01-01T00:00:00'::timestamptz 
from table
    `))

    l(_, new Query(`
select
    product,
    datetime,
    ass,
    amount,
    sum(amount) over(
        order by datetime asc 
        range between '2 days'::interval 
        preceding and current row
        )
from order
    `))

    l(_, new Query(`
create table numbers1 (
    n bigint PRIMARY KEY,
    v double precision
);
    
create table numbers2 (
    n bigint NOT NULL
);
    `))
}