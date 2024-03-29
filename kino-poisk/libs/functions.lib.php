<?php
	/* Удалить изображение */
	function image_delite($template, $table, $image_name)
	{
		if (file_exists(DIRECTORY.'/templates/'.$template.'/img/'.$table.'/large/'.$image_name))
			unlink(DIRECTORY.'/templates/'.$template.'/img/'.$table.'/large/'.$image_name);

		if (file_exists(DIRECTORY.'/templates/'.$template.'/img/'.$table.'/medium/'.$image_name))
			unlink(DIRECTORY.'/templates/'.$template.'/img/'.$table.'/medium/'.$image_name);
	}
	/* Удалить изображение */

	/* Определение айпи */
	function getRealIpAddr()
	{
		if(!empty($_SERVER['HTTP_CLIENT_IP']))
		{
			$ip=$_SERVER['HTTP_CLIENT_IP'];
		}
		elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
		{
			$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
		}
		else
		{
			$ip=$_SERVER['REMOTE_ADDR'];
		}
		return $ip;
	}
	/* Определение айпи */

	/* Норм дата */
	function date_articles($normdate){
		$time = strtotime($normdate);
		$out_d = strftime('%d', $time);
		$out_m = (int)strftime('%m', $time);
		$out_y = strftime('%Y', $time);

		$mes[0]=" - ";
		$mes[1]=" января ";
		$mes[2]=" февраля ";
		$mes[3]=" марта ";
		$mes[4]=" апреля ";
		$mes[5]=" мая ";
		$mes[6]=" июня ";
		$mes[7]=" июля ";
		$mes[8]=" августа ";
		$mes[9]=" сентебря ";
		$mes[10]=" октября ";
		$mes[11]=" ноября ";
		$mes[12]=" декабря ";

		$out = $out_d.$mes[$out_m].$out_y;
		return $out;
	}
	/*.Норм дата */

	/* Создание превью статьи */
	function preview_article($preview_article){
		$preview_article = mb_substr($preview_article,0,mb_strrpos(mb_substr($preview_article,0,150,'utf-8'),' ','utf-8'),'utf-8').' ...';
		return $preview_article;
	}
	/*.Создание превью статьи */

	/* Создание превью статьи */
	function preview_article_120($preview_article){
		$preview_article = mb_substr($preview_article,0,mb_strrpos(mb_substr($preview_article,0,100,'utf-8'),' ','utf-8'),'utf-8').' ...';
		return $preview_article;
	}
	/*.Создание превью статьи */
	
	/* Создание превью статьи */
	function preview_article_80($preview_article){
		$preview_article = mb_substr($preview_article,0,mb_strrpos(mb_substr($preview_article,0,80,'utf-8'),' ','utf-8'),'utf-8').' ...';
		return $preview_article;
	}
	/*.Создание превью статьи */
	/* Имя текущей категории */
	function title_categories($id_cat_articles){
		global $categories;
		foreach($categories as $catval){
			if($id_cat_articles == $catval['id']){
				$title_categories = $catval['title_categories'];
				return $title_categories;
			}
		}
	}
	/*.Имя текущей категории */
	function title_subcategories($id_subcat_articles){
		global $subcategories;
		foreach($subcategories as $subcatval){
			if($id_subcat_articles == $subcatval['id']){
				$title_subcategories = $subcatval['title_subcategories'];
				return $title_subcategories;
			}
		}
	}
	/*.Имя текущей категории */
	/* Имя текущей категории */
	function title_translit_categories($id_cat_articles){
		global $categories;
		foreach($categories as $catval){
			if($id_cat_articles == $catval['id']){
				$title_translit_categories = $catval['title_translit_categories'];
				return $title_translit_categories;
			}
		}
	}
	/*.Имя текущей категории */
	/* Имя текущей категории */
	function title_translit_subcategories($id_subcat_articles){
		global $subcategories;
		foreach($subcategories as $catval){
			if($id_subcat_articles == $catval['id']){
				$title_translit_subcategories = $catval['title_translit_subcategories'];
				return $title_translit_subcategories;
			}
		}
	}
	/*.Имя текущей категории */
	/* Имя текущей категории */
	function id_categories($title_translit_categories){
		global $categories;
		foreach($categories as $catval){
			if($title_translit_categories == $catval['title_translit_categories']){
				$id_categories = $catval['id'];
				return $id_categories;
			}
		}
	}
	/*.Имя текущей категории */
	/* Имя текущей категории */
	function id_subcategories($title_translit_subcategories){
		global $subcategories;
		foreach($subcategories as $catval){
			if($title_translit_subcategories == $catval['title_translit_subcategories']){
				$id_subcategories = $catval['id'];
				return $id_subcategories;
			}
		}
	}
	/*.Имя текущей категории */
	/* Имя текущей статьи */
	function title_articles($id_articles){
		global $data;
		foreach($data as $artticlval){
			if($id_articles == $artticlval['id']){
				$title_articles = $artticlval['title_articles'];
				return $title_articles;
			}
		}
	}
	/*.Имя текущей статьи */
?>