/*
    This file is part of the MapleAegis MapleAegis Server
    Copyleft (L) 2016 - 2019 DrScript

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#ifndef METHOD_LIST_H_
#define METHOD_LIST_H_

typedef struct {
    char *name;
} JavaMethod;

typedef struct JavaMethodListItem {
    JavaMethod *method;
    struct JavaMethodListItem *prox;
} JavaMethodListItem;

typedef struct {
    JavaMethodListItem *first;
    JavaMethodListItem *last;
    JavaMethodListItem *cursor;

    int size;
} JavaMethodList;

#include "method_list.c"

#endif /* METHOD_LIST_H_ */
